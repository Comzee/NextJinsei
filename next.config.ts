import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    USER_PROFILE_ID: process.env.USER_PROFILE_ID || 'user-profile-001',
  },
}

export default nextConfig
