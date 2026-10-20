ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:steam_alloyer',
        [
            'CCC', 
            'PXP', 
            'FFF'  
        ], {
            X: 'gtceu:hp_steam_alloy_smelter',
            P: 'gtceu:double_invar_plate',
            F: 'gtceu:bronze_firebox_casing',
            C: 'gtceu:steam_machine_casing'

        }
    ),
    event.shaped(
        'gtceu:steam_press',
        [
            'CCC', 
            'PXP', 
            'CCC'  
        ], {
            X: 'gtceu:hp_steam_compressor',
            P: 'ulvcovm:ulv_electric_piston',
            C: 'gtceu:steam_machine_casing'
        }
    ),
    event.shaped(
        'gtceu:steam_extractinator',
        [
            'GCG', 
            'PXE', 
            'CCC'  
        ], {
            X: 'gtceu:hp_steam_extractor',
            P: 'ulvcovm:ulv_electric_piston',
            E: 'ulvcovm:ulv_electric_pump',
            G: 'minecraft:glass',
            C: 'gtceu:steam_machine_casing'
        }
    ),
    event.shaped(
        'gtceu:steam_impactor',
        [
            'CPC', 
            'CXC', 
            'CAC'  
        ], {
            X: 'gtceu:hp_steam_forge_hammer',
            A: 'minecraft:anvil',
            P: 'ulvcovm:ulv_electric_piston',
            C: 'gtceu:steam_machine_casing'
        }
    )
})

// remove low pressure multiblock upgrades
ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:shaped/steam_oven_from_lp' })
    event.remove({ id: 'gtceu:shaped/steam_grinder_from_lp' })
})