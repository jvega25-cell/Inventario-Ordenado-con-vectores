class Inventario{
    constructor() {
        this.productos = [];
    }

    agregar(producto){
        if (this.buscarPosicion(producto.codigo) != -1){
            return false;
        }

        this.productos.push(producto);
        let i = this.productos.length -1;
        while (i > 0 && this.productos[i - 1].codigo > producto.codigo){
            this.productos[i] = this.productos[i - 1];
            i--;
        }

        this.productos[i] = producto;
        return true;
    }

    buscar(codigo){
        let pos = this.buscarPosicion(codigo);
        if (pos == -1){
            return null;
        }

        return this.productos[pos];
    }

    buscarPosicion(codigo){
        let inicio = 0;
        let fin = this.productos.length -1;
        while (inicio <= fin){
            let medio = Math.floor((inicio + fin ) / 2);
            if (this.productos[medio].codigo == codigo) {
                return medio;
            } else if (this.productos[medio].codigo < codigo) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }
        return -1;
    }

    eliminar(codigo){
        let pos = this.buscarPosicion(codigo);
        if (pos == -1){
            return null;
        }

        let eliminado = this.productos[pos];
        for (let i = pos; i < this.productos.length -1; i++){
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();
        return eliminado;
    }

    extraerPrimero(){
        if (this.productos.length == 0){
            return null;
        }
        let primero = this.productos[0];
        for (let i = 0; i < this.productos.length -1; i++){
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return primero;
    }

    extraerUltimo(){
        if (this.productos.length == 0){
            return null;
        }
        return this.productos.pop();
    }

    listar(){
        if (this.productos.length == 0){
            return "<p>Inventario vacío</p>";
        }
        let texto = "";
        for (let i = 0; i < this.productos.length; i++){
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }

    listarInverso(){
        if (this.productos.length == 0){
            return "<p>Inventario vacío</p>";
        }
        let texto = "";
        for (let i = this.productos.length - 1; i >= 0; i--) {
            texto += this.productos[i].infoHtml();
        }
        return texto;
    }
}