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

// -- Leather recipe -- //

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
    
    // -- Pams nuking -- //
    event.remove({ id: 'pamhc2crops:paper_x2_paper_plants' })

    event.remove({ id: 'pamhc2foodcore:tool_cuttingboard' })
    event.shaped(
        'pamhc2foodcore:cuttingboarditem',
        [
            'PIS', 
            'HFB', 
            '   '  
        ], {
            P: 'gtceu:copper_plate',
            I: 'minecraft:copper_ingot',
            S: 'gtceu:treated_wood_rod',
            B: 'gtceu:wood_plate',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files',
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_grinder' })
    event.shaped(
        'pamhc2foodcore:grinderitem',
        [
            ' W ', 
            'SWS', 
            'SSS'  
        ], {
            S: 'minecraft:stone',
            W: 'gtceu:treated_wood_rod'
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_mixingbowl' })
    event.shaped(
        'pamhc2foodcore:mixingbowlitem',
        [
            'HWF', 
            'SPS', 
            'SSS'  
        ], {
            S: 'gtceu:treated_wood_planks',
            W: 'gtceu:treated_wood_rod',
            P: 'gtceu:treated_wood_plate',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files'
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_pot' })
    event.shaped(
        'pamhc2foodcore:potitem',
        [
            'R R', 
            'P P', 
            'HPF'  
        ], {
            P: 'gtceu:copper_plate',
            R: 'gtceu:copper_rod',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files',
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_roller' })
    event.shaped(
        'pamhc2foodcore:rolleritem',
        [
            'H F', 
            'SPS', 
            '   '  
        ], {
            S: 'gtceu:treated_wood_rod',
            P: 'gtceu:treated_wood_planks',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files'
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_saucepan' })
    event.shaped(
        'pamhc2foodcore:saucepanitem',
        [
            ' IR', 
            'PGP', 
            'HPF'  
        ], {
            P: 'gtceu:copper_plate',
            R: 'gtceu:treated_wood_rod',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files',
            G: 'minecraft:glass',
            I: 'gtceu:iron_rod'
        }
    )

    event.remove({ id: 'pamhc2foodcore:tool_skillet' })
    event.shaped(
        'pamhc2foodcore:skilletitem',
        [
            '   ', 
            'PRP', 
            'HPF'  
        ], {
            P: 'gtceu:copper_plate',
            R: 'gtceu:treated_wood_rod',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files'
        }
    )

    //Cooking for Blockheads recipes
    event.remove({ id: 'cookingforblockheads:tool_rack' })
    event.shaped(
        'cookingforblockheads:tool_rack',
        [
            'SSS', 
            'NHN', 
            '   '  
        ], {
            S: 'gtceu:treated_wood_plate',
            N: 'minecraft:iron_nugget',
            H: '#gtceu:tools/crafting_hammers'
        }
    )

    event.remove({ id: 'cookingforblockheads:toaster' })
    event.shaped(
        'cookingforblockheads:toaster',
        [
            '  B', 
            'ITI', 
            'ILI'  
        ], {
            B: 'minecraft:stone_button',
            I: 'gtceu:iron_plate',
            T: 'minecraft:iron_trapdoor',
            L: 'minecraft:lava_bucket'
        }
    )

    event.remove({ id: 'cookingforblockheads:spice_rack' })
    event.shapeless(
        'cookingforblockheads:spice_rack',
        [
            'gtceu:treated_wood_plate' 
        ]
    )

    event.remove({ id: 'cookingforblockheads:fruit_basket' })
    event.shaped(
        'cookingforblockheads:fruit_basket',
        [
            'H F', 
            'SPS', 
            '   '  
        ], {
            S: 'gtceu:treated_wood_slab',
            P: 'gtceu:treated_wood_pressure_plate',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files'
        }
    )

    event.remove({ id: 'cookingforblockheads:oven' })
    event.shaped(
        'cookingforblockheads:oven',
        [
            'GGG', 
            'PTP', 
            'PFP'  
        ], {
            G: 'minecraft:black_stained_glass',
            P: 'gtceu:iron_plate',
            T: 'minecraft:iron_trapdoor',
            F: 'minecraft:furnace'
        }
    )

    // Backpacks
    // Adapted from Monifactory at https://github.com/Omicron-Industries/Monifactory/blob/main/kubejs/server_scripts/mods/Sophisticated_Storage.js
    const sophBackpacksMaterials = [
        ["", null, null],
        ["copper_", "bronze", "red_alloy"],
        ["iron_", "steel", "invar"],
        ["gold_", "aluminium", "cupronickel"],
        ["diamond_", "stainless_steel", "kanthal"],
        ["netherite_", "titanium", "chromium"]
    ]
    sophBackpacksMaterials.forEach((material, index) => {
        if (index == 0) return;

        // Works for upgrades as the recipe type implies, but doesn't work for making new backpacks from scratch
        let outputBackpack = `sophisticatedbackpacks:${material[0]}backpack`
        let inputBackpack = `sophisticatedbackpacks:${sophBackpacksMaterials[index - 1][0]}backpack`
        event.remove({ mod: "sophisticatedbackpacks", output: outputBackpack })
        event.custom({
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": outputBackpack
                }
            ],
            "pattern": [
                "INI",
                "NCN",
                "INI"
            ],
            "key": {
                "N": {
                    "tag": (`forge:plates/${material[1]}`)
                },
                "I": {
                    "tag": (`forge:plates/${material[2]}`),
                },
                "C": {
                    "item": inputBackpack
                }
            },
            "result": {
                "item": outputBackpack
            }
        });
    })
})