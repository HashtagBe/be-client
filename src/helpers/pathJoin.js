export default function pathJoin(...paths) {
  return paths.filter(p => !!p).map(p => p.replace(/\/$/ig, '')).join('/');
}
