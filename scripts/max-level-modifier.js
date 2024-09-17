Hooks.once('init', async function() {
  game.settings.register('dnd5e-max-level-modifier', 'maxLevel', {
    name: 'Maximum Character Level',
    hint: 'Set the maximum level for characters in D&D 5e',
    scope: 'world',
    config: true,
    type: Number,
    default: 20,
    range: {
      min: 1,
      max: 50,
      step: 1
    },
    onChange: value => {
      game.dnd5e.config.maxLevel = value;
    }
  });
});

Hooks.once('setup', function() {
  game.dnd5e.config.maxLevel = game.settings.get('dnd5e-max-level-modifier', 'maxLevel');
});
