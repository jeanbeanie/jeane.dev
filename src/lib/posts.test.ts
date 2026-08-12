import { describe, it, expect, vi, type Mock } from 'vitest';
import path from 'path';

// fake out the fs module, no real files touched
vi.mock('fs', () => ({
  default: {
    readdirSync: vi.fn(),
    readFileSync: vi.fn(),
  },
}));

import fs from 'fs';
import { getAllPosts } from './posts';

// two fake posts, dates out of order on purpose
const fixtures: Record<string, string> = {
  'a.md': `---
title: Older
date: "2024-01-01"
description: d
slug: older
---
body`,
  'b.md': `---
title: Newer
date: "2025-01-01"
description: d
slug: newer
---
body`,
};

// node's fs types are overloaded, vi.mocked() can't infer cleanly
// cast once here instead of at every call site
const mockReaddirSync = fs.readdirSync as unknown as Mock;
const mockReadFileSync = fs.readFileSync as unknown as Mock;

describe('getAllPosts', () => {
  it('sorts posts by date, newest first', () => {
    mockReaddirSync.mockReturnValue(['a.md', 'b.md']);
    mockReadFileSync.mockImplementation((filePath: string) => {
      const fileName = path.basename(filePath);
      return fixtures[fileName];
    });

    const posts = getAllPosts();

    // newer post should come first
    expect(posts.map((p) => p.slug)).toEqual(['newer', 'older']);
  });
});
