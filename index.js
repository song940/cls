
function cls() {
  return []
    .slice
    .call(arguments)
    .map((c) => {
      switch (/\[object (\w+)\]/.exec(({}).toString.call(c))[1]) {
        case 'Array': return c;
        case 'String': return [c];
        case 'Object': return Object.keys(c).filter((k) => c[k]);
      }
      return [];
    })
    .reduce((p, c) => p.concat(c), [])
    .filter((c) => !!c)
    .reduce((p, c) => {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
    }, []).join(' ');
}

module.exports = cls;