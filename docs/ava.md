## Pasos seguidos para configurar `AVA`

[Fuente principal](https://github.com/avajs/ava)
[También usado](https://stackoverflow.com/questions/41692023/es6-import-for-ava-test-not-working)

- Para instalar y configurar `AVA`: `npm init ava`
- Añadir la parte de `scripts` y `name` al [json](../package.json) de manera que quede así: 

  ~~~
  "homepage": "https://github.com/ElenaMerelo/goFit#readme",
  "name": "goFit",
	"scripts": {
		"test": "ava"
	},
  "type": "module",
  "devDependencies": {
    "ava": "^3.13.0"
  }
  ~~~

- Crear un archivo `test.js` en el directorio raíz: 
 
  ~~~
    import test from 'ava';
    test('foo', t => {
        t.pass();
    });

    test('bar', async t => {
        const bar = Promise.resolve('bar');
        t.is(await bar, 'bar');
    });
  ~~~

- `npm install esm --save-dev`
- Añadir al [package.json](../package.json):
 
  ~~~
    "ava": {
        "require": [
            "esm"
        ]
    } 
  ~~~

- `npm test` et voilà :D