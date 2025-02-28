(function() {
    var ChannelCollapse = {
        addToolbarItem: function() {
            if(document.querySelectorAll('.show-channels-button').length == 0) {
                var newToolbarItem = document.createElement('span');
                newToolbarItem.classList.add('show-channels-button', 'active');
                newToolbarItem.classList.add(document.querySelector('[class*="toolbar"]').classList[0]);

                // Δεν χρειάζεται να ορίσουμε innerHTML, το CSS θα αναλάβει
                document.querySelector('[class*="toolbar"]').insertBefore(newToolbarItem, document.querySelector('.search-36MZv-'));

                newToolbarItem.addEventListener('click', function() {
                    var sidebar = document.querySelector('.sidebar-2K8pFh');
                    var isActive = this.classList.contains('active');
                    sidebar.style.display = isActive ? 'none' : 'flex';
                    this.classList.toggle('active');
                });
            }
        },

        addEventListeners: function() {
            var guilds = document.querySelectorAll('[class^="guild"]');
            guilds.forEach(function(guild) {
                guild.addEventListener('click', function() {
                    ChannelCollapse.addToolbarItem();
                });
            });
        }
    };

    ChannelCollapse.addToolbarItem();
    ChannelCollapse.addEventListeners();
})();
