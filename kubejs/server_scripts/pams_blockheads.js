ServerEvents.recipes(event => {
    // Pams
    event.remove({ id: 'pamhc2crops:paper_x2_paper_plants' })

    // Tools
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
})
