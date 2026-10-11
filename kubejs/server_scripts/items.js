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