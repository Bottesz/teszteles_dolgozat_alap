
console.log(masodfokuEgyenletMegoldasa(1,2,1))
masodfokuEgyenletMegoldasaTeszt()

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    if (d < 0){
        return "Nincs megoldás";
    }else if(a === 0){
        return "Az a nem lehet 0";
    }else{
    const eredmeny = {
        X1: x1,
        X2: x2,
    };
    return eredmeny;
}
}

//10 kulonbozo teszteset szovegre ne, csak szamokra
//vart x1 = (nem).x1
//vart x2 = (nem).x2
function masodfokuEgyenletMegoldasaTeszt(){
    let eredmeny = masodfokuEgyenletMegoldasa(2,7,3)
    let vartx1 = -0.5; 
    let vartx2 = -3;
    let kapottertekx1 = eredmeny.X1
    let kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 &&  vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    

    masodfokuEgyenletMegoldasa(2,8,7)
    vartx1 = -1.2928932188134525; 
    vartx2 = -2.7071067811865475;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    

    masodfokuEgyenletMegoldasa(1,8,7)
    vartx1 = -1; 
    vartx2 = -7;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))  
    
    masodfokuEgyenletMegoldasa(2,0,7)
    vartx1 = "*komplex,negatív a D"; 
    vartx2 = "*komplex,negatív a D";
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    

    masodfokuEgyenletMegoldasa(0,0,0)
    vartx1 = "Az a nem lehet 0"; 
    vartx2 = "Nincs megoldas";
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))   
    
    masodfokuEgyenletMegoldasa(1,1,1)
    vartx1 = "Nincs megoldas"; 
    vartx2 = "Nincs megoldas";
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    

    masodfokuEgyenletMegoldasa(-3,-2,-1)
    vartx1 = "Nincs megoldas"; 
    vartx2 = "Nincs megoldas";
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    

    masodfokuEgyenletMegoldasa(-3,5,1)
    vartx1 = -0.1804604217163699; 
    vartx2 = 1.8471270883830364;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))
    
    masodfokuEgyenletMegoldasa(-4,-4,1)
    vartx1 = -1.2071067811865475; 
    vartx2 = 0.20710678118654757;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))
    
    masodfokuEgyenletMegoldasa(-2,-4,-1)
    vartx1 = -1.7071067811865475; 
    vartx2 = -0.2928932188134524;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))
    
    masodfokuEgyenletMegoldasa(-223232323,-443535353,-11212120)
    vartx1 = -1.9612687731910123; 
    vartx2 = -0.025609054532887855;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))
    
    masodfokuEgyenletMegoldasa(2,4,0)
    vartx1 = 0; 
    vartx2 = -2;
    kapottertekx1 = eredmeny.X1
    kapottertekx2 = eredmeny.X2
    console.assert(masodfokuEgyenletMegoldasa(vartx1 = kapottertekx1 && vartx2 === kapottertekx2,`várt eredmény ${vartx1, vartx2} kapott: ${kapottertekx1,kapottertekx2}` ))    


}

