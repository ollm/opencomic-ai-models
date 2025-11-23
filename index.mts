import p from 'path';

const ___dirname = typeof __dirname !== 'undefined' ? __dirname : import.meta.dirname;

const path: string = p.join(___dirname, 'models');

export default {
	path,
};