const { src, dest, watch } = require('gulp');
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
    watch('src/scss/app.scss', css);
}

exports.css = css;
exports.dev = dev;