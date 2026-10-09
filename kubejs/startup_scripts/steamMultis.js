// In order to use multiblock logic extending beyond the default multiblock type for KJS (WorkableElectricMultiblockMachine), you need to load a class.
const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');

// -- Steam Alloyer -- //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_alloyer', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        // Number dictates amount of parallels
        .langValue("Steam Alloyer")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('alloy_smelter')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("FFF", "MMM", "AAA")
            .aisle("FFF", "MAM", "MMM")
            .aisle("FFF", "MCM", "MMM")
            .where('A', Predicates.any()) // Air
            .where('F', Predicates.blocks('gtceu:bronze_firebox_casing')
                .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))) // Firebox/Steam Input
            .where('M', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10)
               .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1)))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/alloy_smelter")
})

// -- Steam Press -- //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_press', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        // Number dictates amount of parallels
        .langValue("Steam Press")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('compressor')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("MMM", "MMM", "MMM", "MMM")
            .aisle("MMM", "MAM", "MAM", "MMM")
            .aisle("MMM", "MCM", "MMM", "MMM")
            .where('A', Predicates.any()) // Air
            .where('M', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10)
               .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))) // Firebox/Steam Input
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/compressor")
})

//-- Steam Extractinator -- //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_extractinator', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        // Number dictates amount of parallels
        .langValue("Steam Extractinator")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('extractor')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("MMMMM", "MMMMM", "MMMMM")
            .aisle("MMMMM", "MAAAM", "MMMMM")
            .aisle("MMMMM", "MGGGM", "MMCMM")
            .where('A', Predicates.any()) // Air
            .where('M', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10)
               .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))) // Firebox/Steam Input
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('minecraft:glass'))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/extractor")
})

// -- Steam Impactor -- //
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_impactor', 'multiblock')
        .machine((holder) => new $SteamMulti(holder, 8))
        // Number dictates amount of parallels
        .langValue("Steam Impactor")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('forge_hammer')
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(GTBlocks.BRONZE_HULL)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("MMM", "MAM", "MAM", "MAM", "MMM")
            .aisle("MMM", "AIA", "AAA", "AIA", "MMM")
            .aisle("MCM", "MAM", "MAM", "MAM", "MMM")
            .where('A', Predicates.any()) // Air
            .where('M', Predicates.blocks('gtceu:steam_machine_casing').setMinGlobalLimited(10)
               .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setMaxGlobalLimited(1))
               .or(Predicates.abilities(PartAbility.STEAM).setMaxGlobalLimited(1))) // Firebox/Steam Input
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks('minecraft:glass'))
            .where('I', Predicates.blocks('minecraft:iron_block'))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/machines/forge_hammer")
})