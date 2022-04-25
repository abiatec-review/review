export const genderConfig = (radioSex: string) => ({
   title: 'Please, choose the gender',
   fields: [
       {
           value: 'Male',
           label: 'Male',
           checked: radioSex === 'Male',
       },
       {
           value: 'Female',
           label: 'Female',
           checked: radioSex === 'Female',
       },
       {
           value: 'Genderless',
           label: 'Genderless',
           checked: radioSex === 'Genderless',
       },
       {
           value: 'unknown',
           label: 'Unknown',
           checked: radioSex === 'unknown',
       }
   ]
})

export const statusConfig = (radioStatus: string) => ({
    title: 'Please, choose the status',
    fields: [
        {
            value: 'Alive',
            label: 'Alive',
            checked: radioStatus === 'Alive',
        },
        {
            value: 'Dead',
            label: 'Dead',
            checked: radioStatus === 'Dead',
        },
        {
            value: 'unknown',
            label: 'Unknown',
            checked: radioStatus === 'unknown',
        },
    ]
})