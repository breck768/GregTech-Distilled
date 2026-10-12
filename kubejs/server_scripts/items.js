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
    event.recipes.gtceu.assembler('gtceu:assembler/rail_steel')
        .itemInputs('12x gtceu:steel_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) // Duration in ticks (20 ticks = 1 second)
        .EUt(30)     // Energy per tick (EU/t)
});

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('gtceu:assembler/rail_aluminium')
        .itemInputs('6x gtceu:aluminium_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) // Duration in ticks (20 ticks = 1 second)
        .EUt(30)     // Energy per tick (EU/t)
});

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('gtceu:assembler/rail_stainless')
        .itemInputs('3x gtceu:stainless_steel_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) // Duration in ticks (20 ticks = 1 second)
        .EUt(30)     // Energy per tick (EU/t)
});

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('gtceu:assembler/rail_titanium')
        .itemInputs('1x gtceu:titanium_rod', '1x minecraft:stick')
        .circuit(1)
        .itemOutputs('64x minecraft:rail')
        .duration(100) // Duration in ticks (20 ticks = 1 second)
        .EUt(30)     // Energy per tick (EU/t)
});