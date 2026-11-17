const $RecipeLogic = Java.loadClass('com.gregtechceu.gtceu.api.machine.trait.RecipeLogic')
const $List = Java.loadClass('java.util.List')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('greenhouse')
        .category('distilled')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CCCCC')
            .aisle('CFFFC', 'G###G', 'G###G', 'G###G', 'CGGGC')
            .aisle('CFLFC', 'G###G', 'G###G', 'G###G', 'CGGGC')
            .aisle('CFFFC', 'G###G', 'G###G', 'G###G', 'CGGGC')
            .aisle('CCKCC', 'CGGGC', 'CGGGC', 'CGGGC', 'CCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks('farmland')
            )
            .where('G', Predicates.blocks('gtceu:tempered_glass'))
            .where('L', Predicates.blocks('oak_leaves')
                .or(Predicates.blocks('birch_leaves'))
                .or(Predicates.blocks('spruce_leaves'))
                .or(Predicates.blocks('jungle_leaves'))
                .or(Predicates.blocks('acacia_leaves'))
                .or(Predicates.blocks('dark_oak_leaves'))
                .or(Predicates.blocks('mangrove_leaves'))
                .or(Predicates.blocks('cherry_leaves'))
                .or(Predicates.blocks('azalea_leaves'))
                .or(Predicates.blocks('flowering_azalea_leaves'))
                .or(Predicates.blocks('rubber_leaves'))
            )
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where('#', Predicates.air())
            .build()
        )
        .modelProperty(GTModelProperties.RECIPE_LOGIC_STATUS, $RecipeLogic.Status.IDLE)
        .model(GTMachineModels.createWorkableCasingMachineModel(GTCEu.id("block/casings/solid/machine_casing_solid_steel"), GTCEu.id("block/machines/autoclave"))
            ["andThen(java.util.function.Consumer)"](b => b.addDynamicRenderer(() => GTDynamicRenders.makeGrowingPlantRender($List.of(
                new Vector3f(0, 1, -1), // Front
                new Vector3f(1, 1, -1), // Right Front
                new Vector3f(-1, 1, -1), // Left Front
                new Vector3f(-1, 1, -2), // Left
                new Vector3f(-1, 1, -3), // Left Back
                new Vector3f(0, 1, -3), // Back
                new Vector3f(1, 1, -3), // Right Back
                new Vector3f(1, 1, -2) // Right
            ))))
        )
})