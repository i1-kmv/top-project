import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true, // работа с абсолютными путями
    modules: [options.paths.src, 'node_modules'],
    alias: {}, // спецсимвол, который указывается перед абсолютным путем, пустым объектом упраздняем
    mainFiles: ['index'], // задаем главный файл для каждого модуля
});
