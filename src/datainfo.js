const DataInfo ={
    DetailInsurance :[
    
    {
        nameDamage:"Desbarranco",
        damage:"Daño total del vehículo",
        description:"Devolverle un nuevo vehículo con las características dadas al momento de la adquisición del seguro.",
        solutions:[0,1,3,5],
        id:1
    },
    {
        nameDamage: "Avería Mecánica",
        damage:"Falla mecánica",
        description: "Garantizarle la reparación total de su auto, enviandole un mecánico a su ubicación y/o grúa de ser necesario.",
        solutions:[0,1,3],
        id: 2
    },
    {
        nameDamage: "Choque provocado por el conductor",
        damage:"Daño Propio",
        description: "Cubrir los daños o pérdidas que sufra su vehículo por las maniobras hechas por el conductor: rotura de lunas y accesorios musicales.",
        solutions:[0,1,3,4],
        id: 3
    },
    {
        nameDamage: "Choque Frontal",
        damage:"Accidente de los ocupantes",
        description: "Cubrir de gastos de curación de los ocupantes de su vehículo y de los daños ocasionados a su vehículo.",
        solutions:[0,4],
        id: 4
    },
    {
        nameDamage: "Volcadura",
        damage:"Daño por despite o imperfecto mecánico",
        description: "Cubrir los gatos de muerte, invalidez permanente total o parcial y gastos de curación de los ocupantes de su vehículo.",
        solutions:[2,3,4,5],
        id: 5
    },
    {
        nameDamage:"Robo de Vehículo",
        damage:"Pérdida Total del Vehículo",
        description:"Pagará el Valor Comercial de su vehículo en el mercado peruano en la fecha del siniestro.",
        solutions:[3],
        id:6
    }


],
    Solutions: ["Servicio Mecánico", "Servicio de Grúa","Chofer de reemplazo", "Carro de reemplazo","Ambulancia"]
}
export default DataInfo;