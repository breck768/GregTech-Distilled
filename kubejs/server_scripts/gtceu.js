ServerEvents.recipes(event => {
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
})