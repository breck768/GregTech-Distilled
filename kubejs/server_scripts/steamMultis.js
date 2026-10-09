ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:steam_alloyer',
        [
            '   ', 
            ' X ', 
            '   '  
        ], {
            X: 'gtceu:hp_steam_alloy_smelter'
        }
    ),
    event.shaped(
        'gtceu:steam_press',
        [
            '   ', 
            ' X ', 
            '   '  
        ], {
            X: 'gtceu:hp_steam_compressor'
        }
    ),
    event.shaped(
        'gtceu:steam_extractinator',
        [
            '   ', 
            ' X ', 
            '   '  
        ], {
            X: 'gtceu:hp_steam_extractor'
        }
    ),
    event.shaped(
        'gtceu:steam_impactor',
        [
            '   ', 
            ' X ', 
            '   '  
        ], {
            X: 'gtceu:hp_steam_forge_hammer'
        }
    )
})

// remove low pressure multiblock upgrades
ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:shaped/steam_oven_from_lp' })
    event.remove({ id: 'gtceu:shaped/steam_grinder_from_lp' })
})