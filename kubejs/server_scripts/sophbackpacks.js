ServerEvents.recipes(event => {
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