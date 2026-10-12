// -- Hot Iron Ingots Recipes -- //
ServerEvents.recipes(event => {
    event.smelting('kubejs:iron_hot_ingot', 'minecraft:iron_ingot')
    event.shapeless(
        'gtceu:wrought_iron_ingot', 
        [
            'kubejs:iron_hot_ingot',
            '#forge:tools/hammers'
        ]
    )
})

// -- Crude Glass Recipe -- //
ServerEvents.recipes(event => {
    event.smelting('kubejs:crude_glass', 'gtceu:glass_dust')
})

// -- Nuke vanilla carpet recipes because gt doesnt remove them?? -- //
ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:white_carpet' })
    event.remove({ id: 'minecraft:light_gray_carpet' })
    event.remove({ id: 'minecraft:gray_carpet' })
    event.remove({ id: 'minecraft:black_carpet' })
    event.remove({ id: 'minecraft:brown_carpet' })
    event.remove({ id: 'minecraft:red_carpet' })
    event.remove({ id: 'minecraft:orange_carpet' })
    event.remove({ id: 'minecraft:yellow_carpet' })
    event.remove({ id: 'minecraft:lime_carpet' })
    event.remove({ id: 'minecraft:green_carpet' })
    event.remove({ id: 'minecraft:cyan_carpet' })
    event.remove({ id: 'minecraft:light_blue_carpet' })
    event.remove({ id: 'minecraft:blue_carpet' })
    event.remove({ id: 'minecraft:purple_carpet' })
    event.remove({ id: 'minecraft:magenta_carpet' })
    event.remove({ id: 'minecraft:pink_carpet' })
})

// -- Rail Recipes -- //



ServerEvents.recipes(event => {
    event.shaped(
            Item.of('minecraft:rail', 16),
            [
                'SHS', 
                'RTR', 
                'RCR'  
            ], {
                S: 'gtceu:iron_screw', 
                H: '#gtceu:tools/crafting_hammers',
                R: 'gtceu:iron_rod',
                T: 'gtceu:treated_wood_rod',
                C: '#gtceu:tools/crafting_screwdrivers'
            }
        )

    event.shaped(
            Item.of('minecraft:rail', 32),
            [
                'SHS', 
                'RTR', 
                'RCR'  
            ], {
                S: 'gtceu:steel_screw', 
                H: '#gtceu:tools/crafting_hammers',
                R: 'gtceu:steel_rod',
                T: 'gtceu:treated_wood_rod',
                C: '#gtceu:tools/crafting_screwdrivers'
            }
        )

    event.recipes.gtceu.assembler('gtceu:assembler/rail_steel')
        .itemInputs('12x gtceu:steel_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) 
        .EUt(30)   

    event.recipes.gtceu.assembler('gtceu:assembler/rail_aluminium')
        .itemInputs('6x gtceu:aluminium_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) 
        .EUt(30)  

    event.recipes.gtceu.assembler('gtceu:assembler/rail_stainless')
        .itemInputs('3x gtceu:stainless_steel_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100)
        .EUt(30)    

    event.recipes.gtceu.assembler('gtceu:assembler/rail_titanium')
        .itemInputs('1x gtceu:titanium_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) 
        .EUt(30) 
});