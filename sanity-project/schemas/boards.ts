export default {
  name: 'board',
  type: 'document',
  title: 'Board',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {
        required: () => {(): any; new (): any; error: {(arg0: string): any; new (): any}}
      }) => Rule.required().error('Image is required'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          max: {
            (arg0: number): {(): any; new (): any; error: {(arg0: string): any; new (): any}}
            new (): any
          }
        }
      }) => Rule.required().max(50).error('Name is required and must be up to 50 characters long'),
    },
  ],
}
