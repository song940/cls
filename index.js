
function cls() {
  return []
    .slice
    .call(arguments)
    .map(function (c) {
      switch (/\[object (\w+)\]/.exec(({}).toString.call(c))[1]) {
        case 'Array': return c;
        case 'String': return [c];
        case 'Object': return Object.keys(c).filter(function (k) {
          return c[k];
        });
      }
      return [];
    })
    .reduce(function (p, c) {
      return p.concat(c)
    }, [])
    .filter(Boolean)
    .reduce(function (p, c) {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
    }, []).join(' ');
}

module.exports = cls;