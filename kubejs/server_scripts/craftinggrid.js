// -- CRAFTING GRID RECIPES -- //

ServerEvents.recipes(event => {
    // GTNH Gravel > Flint
    event.shapeless(
        'minecraft:flint', 
        [
            '3x minecraft:gravel'
        ]
    )

    // GTNH Glass Lens
    event.shaped(
        'gtceu:glass_lens',
        [
            'FTF', 
            'FGF', 
            'FDF'  
        ], {
            D: 'minecraft:diamond', 
            G: 'minecraft:glass',
            F: 'minecraft:flint',
            T: '#forge:tools/files'
        }
    )
})