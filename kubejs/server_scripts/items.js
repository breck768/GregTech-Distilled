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

ServerEvents.recipes(event => {
    event.recipes.gtceu.compressor('gtceu:compressor/leather')
        .itemInputs('4x minecraft:rotten_flesh')
        .itemOutputs('1x minecraft:leather')
        .duration(300) 
        .EUt(2) 
});

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

    // Backpack Upgrade
    event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
    event.shaped(
        'sophisticatedbackpacks:upgrade_base',
        [
            'SIS', 
            'ILI', 
            'SIS'  
        ], {
            S: 'minecraft:string', 
            L: 'minecraft:leather',
            I: 'gtceu:steel_plate'
        }
    )


    // -- Tool Belt -- //
    event.remove({ id: 'toolbelt:belt' })
    event.shaped(
        'toolbelt:belt',
        [
            'SLS', 
            'L L', 
            'LPL'  
        ], {
            S: 'minecraft:string', 
            L: 'minecraft:leather',
            P: 'gtceu:steel_plate'
        }
    )

    // -- Boiler Recipes -- //
    event.remove({ id: 'gtceu:shaped/steam_boiler_lava_bronze' })
    event.shaped(
        'gtceu:lp_steam_liquid_boiler',
        [
            'PPP', 
            'PGP', 
            'PCP'  
        ], {
            P: 'gtceu:bronze_plate', 
            C: 'gtceu:bronze_brick_casing',
            G: 'kubejs:crude_glass'
        }
    )
    event.remove({ id: 'gtceu:shaped/steam_boiler_solar_bronze' })
    event.shaped(
        'gtceu:lp_steam_solar_boiler',
        [
            'GGG', 
            'SSS', 
            'PCP'  
        ], {
            S: 'gtceu:silver_plate', 
            C: 'gtceu:bronze_brick_casing',
            G: 'kubejs:crude_glass',
            P: 'gtceu:bronze_small_fluid_pipe'
        }
    )

    // -- Extractor recipe -- //

    event.remove({ id: 'gtceu:shaped/steam_extractor_bronze' })
    event.shaped(
        'gtceu:lp_steam_extractor',
        [
            'BBB', 
            'PCG', 
            'BBB'  
        ], {
            B: 'gtceu:bronze_small_fluid_pipe', 
            P: '#forge:pistons',
            C: 'gtceu:bronze_machine_casing',
            G: 'kubejs:crude_glass'
        }
    )
    // -- Glider Recipes -- //
    event.remove({ id: 'hangglider:glider_framework' })
    event.shaped(
        'hangglider:glider_framework',
        [
            ' R ', 
            'R R', 
            'RRR'  
        ], {
            R: 'gtceu:iron_rod'
        }
    )
    

})