const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem');
const $CropBlock = Java.loadClass('net.minecraft.world.level.block.CropBlock');
const $Block = Java.loadClass('net.minecraft.world.level.block.Block');
const $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3');

ServerEvents.recipes(event => {
    // -- Controller Recipe -- //
    event.shaped(
        'gtceu:greenhouse',
        ['AWA', 'ASA', 'WAW'],
        {
            A: '#forge:circuits/mv',
            W: 'gtceu:copper_single_cable',
            S: 'gtceu:solid_machine_casing'
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

    // -- Crops -- //
    const seedIds = Ingredient.of('#forge:seeds').getItemIds();
    seedIds.forEach(seedId => {
        let level = Utils.server.overworld();
        let seedStack = Item.of(seedId);
        let item = seedStack.item;
        if (!(item instanceof $BlockItem)) return;
        let block = item.block;
        let state = block.defaultBlockState();
        if (block instanceof $CropBlock) {
            state = block.getStateForAge(block.getMaxAge());
        }
        let drops = $Block.getDrops(
            state,
            level,
            BlockPos.ZERO,
            null, // BlockEntity
            null, // Entity
            Item.of('minecraft:air') // Tool
        );
        let results = [];
        drops.forEach(drop => {
            let dropId = drop.id;
            if (dropId !== seedId && !results.includes(dropId)) {
                results.push(dropId);
            }
        });
        // The entire above block of code gets the loot drop of a fully grown crop to retrieve the actual item youd get
        // I literally don't think theres any more elegant way of doing that
        if (seedId == "minecraft:melon_seeds") results[0] = "minecraft:melon_slice";
        if (seedId == "minecraft:pumpkin_seeds") results[0] = "minecraft:pumpkin";
        var crop = results[0];
        var cropName = crop.split(':')[1]; 
        Greenhouse(cropName, seedId, 1000, '16x ' + crop, false);
        Greenhouse(cropName + "_boosted", seedId, 1000, '32x ' + crop, true);
    })
})