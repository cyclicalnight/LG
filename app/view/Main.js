Ext.define("LG.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'tabpanel',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'formpanel',
            	title: 'Login',
                iconCls: 'user',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                    	docked: 'top',
                    	xtype: 'titlebar',
                    	title: 'Login'
                    },
                    {
                    	xtype: 'fieldset',
                    	title: 'Login',
                    	
                    	items: [
                    	    {
                    	    	xtype: 'textfield',
                    	    	label: 'id',
                    	    	name: 'id',
                    	    	value: 'okuser'
                    	    },
                    	    {
                    	    	xtype: 'passwordfield',
                    	    	label: 'password',
                    	    	name: 'password',
                    	    	value: 'okpass'
                    	    }
                    	]
                    },
                    {
                    	xtype: 'button',
                    	text: 'Check',
                    	ui: 'confirm',
                    	handler: function() {
                    		this.up().submit({
                    			url: './login.jsp',
                    			success: function(form, res) {
                    				console.log('success ' + JSON.stringify(res.info));
                    				Ext.Msg.alert('Message','success', function() {
                    					console.log('alert closed');
                    					var tab = Ext.getCmp('tabpanel');
                    					tab.setActiveItem(1);
                    				});
                    				console.log('fin');
                    			},
                    			failure: function(form, res) {
                    				console.log('Message','success',
                    						'failure ' + JSON.stringify(res.info));
                    				Ext.Msg.alert('Message','Login failed', function() {
                    					console.log('alert closed');
                    				});
                    				console.log('fin');
                    			}
                    		});
                    		console.log('log: ' + this);
                    	}
                    }
                ]
            },
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            }
        ]
    }
});
