import { replicate } from '@ai-sdk/replicate';
import { experimental_generateImage as generateImage } from 'ai';
import { writeFile } from 'node:fs/promises';

const { image } = await generateImage({
  model: replicate.image('black-forest-labs/flux-schnell'),
  prompt: 'The Loch Ness Monster getting a manicure',
  aspectRatio: '16:9',
  providerOptions: {
    replicate: {
      go_fast: true,
      format: 'webp',
      num_inference_steps: 4,
      output_quality: 100,
    },
  },
});

await writeFile('image.webp', image.uint8Array);

console.log('Image saved as image.webp');
