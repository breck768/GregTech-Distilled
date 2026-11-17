ServerEvents.recipes(event => {
    // -- Controller Recipe -- //
    event.shaped(
        'gtceu:greenhouse',
        ['MGM', 'CWC', 'MCM'],
        {
            C: '#gtceu:circuits/lv',
            W: 'gtceu:lv_world_accelerator',
            M: 'gtceu:solid_machine_casing',
            G: 'gtceu:tempered_glass'
        }
    ).id('gtceu:shaped/greenhouse')

    // -- Recipe builder helper function (used for crops) -- //
    function Greenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(320)
                .EUt(120)
        } else {
            event.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(640)
                .EUt(120)
        }
    }

    // -- Trees -- //
    const plankIds = Ingredient.of('#minecraft:planks').getItemIds();
    plankIds.forEach(plankId => {
        var woodPrefix = plankId.replace('_planks', '');
        var logName = woodPrefix + "_log";
        var saplingName = woodPrefix + "_sapling";
        // Vanilla edge cases
        if (plankId.includes("crimson")) 
        {
            saplingName = "minecraft:crimson_fungus";
            logName = "minecraft:crimson_stem";
        }
        if (plankId.includes("warped")) 
        {
            saplingName = "minecraft:warped_fungus";
            logName = "minecraft:warped_stem";
        }
        if (plankId.includes("mangrove")) 
        {
            saplingName = "minecraft:mangrove_propagule";
        }
        if (plankId.includes("bamboo")) return; // Bamboo will be done with the normal crops
        if (plankId.includes("plate")) return; // GT wood planks lol
        event.recipes.gtceu.greenhouse(woodPrefix)
                .circuit(1)
                .notConsumable(InputItem.of(saplingName))
                .inputFluids(Fluid.of('minecraft:water', 1000))
                .itemOutputs(['32x ' + logName, '4x ' + saplingName])
                .duration(640)
                .EUt(120)
        woodPrefix += "_boosted";
        event.recipes.gtceu.greenhouse(woodPrefix)
                .circuit(2)
                .notConsumable(InputItem.of(saplingName))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', 1000))
                .itemOutputs(['64x ' + logName, '4x ' + saplingName])
                .duration(320)
                .EUt(120)
    });
    // Rubber Trees (separate to include sticky resin)
    Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Maple trees (theyre freaky)
    Greenhouse('maple_sapling', 'pamhc2trees:maple_sapling', 1000, ['32x pamhc2trees:pammaple', '8x pamhc2trees:maplesyrupitem', '4x pamhc2trees:maple_sapling'], false)
    Greenhouse('maple_sapling_boosted', 'pamhc2trees:maple_sapling', 1000, ['64x pamhc2trees:pammaple', '16x pamhc2trees:maplesyrupitem', '4x pamhc2trees:maple_sapling'], true)

    // -- Crops -- //
    const seedIds = Ingredient.of('#forge:seeds').getItemIds();

    seedIds.forEach(seedId => {
        let crop = null;

        // 1. Check if the seed is crafted from a single non-seed item
        event.forEachRecipe({ output: seedId }, r => {
            if (crop) return;
            let count = 0;
            let firstIng = null;
            for (let ing of r.originalRecipeIngredients) {
                count++;
                firstIng = ing;
            }
            if (count === 1 && firstIng) {
                for (let itemId of firstIng.getItemIds()) {
                    if (itemId !== seedId && !itemId.includes('seed')) {
                        crop = itemId;
                        break;
                    }
                }
            }
        });

        // 2. Fallback: strip "_seeds" or "_seed" from the ID
        if (!crop) {
            let guessedCrop = seedId.replace(/_seeds?$/, '');
            if (guessedCrop !== seedId && Item.exists(guessedCrop)) {
                crop = guessedCrop;
            }
        }

        // 3. Explicit vanilla exceptions
        if (seedId == "minecraft:melon_seeds") crop = "minecraft:melon_slice";
        if (seedId == "minecraft:pumpkin_seeds") crop = "minecraft:pumpkin";
        if (!crop) return;

        var cropName = crop.split(':')[1];
        Greenhouse(cropName, seedId, 1000, '16x ' + crop, false);
        Greenhouse(cropName + "_boosted", seedId, 1000, '32x ' + crop, true);
    });
})