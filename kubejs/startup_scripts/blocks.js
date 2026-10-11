// -- Crude Glass -- //
StartupEvents.registry('block', event => {
    event.create('crude_glass')
        .displayName('Crude Glass')
        .soundType('glass')
        .hardness(0.3)
        .resistance(0.3)
        .opaque(false)
        .fullBlock(false)
        .renderType('cutout')
        .defaultTranslucent()
        .noDrops()
});