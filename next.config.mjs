import path from 'path';
import BundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// see more: https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
// run: ANALYZE=true npm run build
const withBundleAnalyzer = BundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

export default withBundleAnalyzer(nextConfig);