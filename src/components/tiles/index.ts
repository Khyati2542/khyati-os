import type { ComponentType } from 'react';
import EstimatorTile from './EstimatorTile';
import GitSageTile from './GitSageTile';
import LinkedInTile from './LinkedInTile';
import McpTile from './McpTile';
import ObservabilityTile from './ObservabilityTile';
import PiiTile from './PiiTile';
import RouterTile from './RouterTile';

// Maps a project `id` (src/data/projects.ts) to its decorative visual.
export const tileVisuals: Record<string, ComponentType> = {
  router: RouterTile,
  pii: PiiTile,
  gitsage: GitSageTile,
  mcp: McpTile,
  estimator: EstimatorTile,
  linkedin: LinkedInTile,
  observability: ObservabilityTile,
};
