/** @type {import('next').NextConfig} */

// ESモジュールのスコープ内でrequireを定義
import { createRequire } from "module";
const require = createRequire(import.meta.url);

require("dotenv").config();

const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;
