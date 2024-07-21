import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 将'@'设置为项目src目录的别名
        },
    },
    plugins: [
        react(),
        vitePluginImp({
            libList: [
                {
                    libName: '@nutui/nutui-react',
                    style: (name) => {
                        return `@nutui/nutui-react/dist/esm/${name}/style/css`
                    },
                    replaceOldImport: false,
                    camel2DashComponentName: false,
                }
            ]
        })
    ],
})

