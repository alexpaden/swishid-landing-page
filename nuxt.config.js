import pkg from './package'
export default {
    mode: 'universal',
    // Headers of the page
    head: {
        title: 'Swish | Identity Document Management',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
            { name: 'msapplication-TileColor', content: '#DA532C' },
            { name: 'theme-color', content: '#FFFFFF' },
            { property: 'og:image:width', content: '279' },
            { property: 'og:image:height', content: '279' },
            { property: 'og:image', content: 'https://swishid.com/og-image.png' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'manifest', href: '/webmanifest.json' },
            { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
        ]
    },

    // Customize the progress-bar color
    loading: { color: '#fff' },

    // Global styles
    css: [
        '@/assets/styles/main.sass'
    ],

    // Plugins to load before mounting the App
    plugins: [],

    // Nuxt.js dev-modules
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        // '@nuxtjs/eslint-module'
    ],

    // Nuxt.js modules
    modules: [],

    // Build configuration
    build: {
    // You can extend webpack config here
        extend (config, ctx) {}
    },

    generate: {
        fallback: true
    }
}
