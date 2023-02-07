import boards from './boards';

export default {
    name: 'boardList',
    type: 'document',
    title: 'Board List',
    fields: [
      {
        name: 'boards',
        title: 'Boards',
        type: 'array',
        of: [{ type: 'board' }],
        validation: (boards = []) => {
          return boards.length <= 6
            ? true
            : 'Cannot add more than 6 boards';
        },
      },
    ],
  };
  