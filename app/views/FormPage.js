blogapp.views.Form = new Ext.TabPanel({
    items: [{
        xtype: 'fieldset',
        title: 'Personal Info',
        instructions: 'Please enter the information above.',
        defaults: {
            // labelAlign: 'right'
            labelWidth: '35%'
        },
        items: [{
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            placeHolder: 'Tom Roy',
            autoCapitalize : true,
            required: true,
            useClearIcon: true
        },  {
            xtype: 'datepickerfield',
            name: 'birthday',
            label: 'Birthday',
            picker: { yearFrom: 1900 }
        }]
    }]
});
// if (Ext.is.Android) {
//     demos.Forms.insert(0, {
//         xtype: 'component',
//         styleHtmlContent: true,
//         html: '<span style="color: red">Forms on Android are currently under development. We are working hard to improve this in upcoming releases.</span>'
//     });
