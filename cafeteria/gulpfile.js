const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done){
    //compilar sas
    //pasos: 1 - identificar archivo, 2 - Compilarla. 3 - Guardar el .css
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe(postcss([autoprefixer()]))
        .pipe( dest('build/css') );

        done(); //** Indica cuando finaliza el metodo
}

function dev(){
    //watch revisa cualquier cambio en algun archivo y si se modifica lanza un metodo
    //watch('src/scss/app.scss', css); --> tambien puede observar unicamente el que seleccione
    watch('src/scss/**/*.scss', css); // -> observa cualquier archivo .scss
}

exports.css = css;
exports.dev = dev;
exports.default = series(css,dev);

//series-Inicia una tarea la termina y ejecuta la otra
//parallel-Todas inicias al mismo tiempo