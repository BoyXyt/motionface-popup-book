import {Config} from '@remotion/cli/config';

// Video frames are encoded as JPEG for speed; stills as PNG.
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

// Prefer JPEG quality 90 for the placeholder scene.
Config.setJpegQuality(90);
