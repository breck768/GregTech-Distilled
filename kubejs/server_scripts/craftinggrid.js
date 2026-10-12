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