/* Table script */


$(function () {
    var JSON = {
        data: [
            {
                'id': 1,
                'name': '<a href="#" class="table__name-link">ADO-01</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/non-toxic.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 2,
                'name': '<a href="#" class="table__name-link">ADO-02</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/toxic.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 3,
                'name': '<a href="#" class="table__name-link">ADO-03</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/flask.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 4,
                'name': '<a href="#" class="table__name-link">ADO-04</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/light-bulb.svg">non-toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 5,
                'name': '<a href="#" class="table__name-link">ADO-05</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/key.svg">toxic',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': 'User1',
                'number_of_samples': 1
            },
            {
                'id': 6,
                'name': '<a href="#" class="table__name-link">ADO-06</a>',
                'type': 'chemical',
                'group': '<img class="table__group-icon" src="img/lock.svg">lock',
                'added_on': '2017-01-03',
                'added_by': 'User1',
                'author': '',
                'number_of_samples': 1
            },
        ],
        columns: [
            {data: 'id'},
            {title: 'Name', data: 'name'},
            {title: 'Type', data: 'type'},
            {title: 'Group', data: 'group'},
            {title: 'Added on', data: 'added_on'},
            {title: 'Added by', data: 'added_by'},
            {title: 'Author', data: 'author'},
            {title: 'No. of samples', data: 'number_of_samples'}
        ]
    };

    var table = $('.table').DataTable({
        data: JSON.data,
        columns: JSON.columns,
        columnDefs: [
            {
                targets: 0,
                render: function (data) {
                    return '<div class="table__select-container"><input class="table__select table__select--one ' + data + '" type="checkbox"></div>';
                },
                title: '<div class="table__select-container"><input type="checkbox" class="table__select table__select--all"></div>',
                width: '25px',
                orderable: false
            },
            {
                targets: '_all',
                className: 'table__cell'

            },
            {
                targets: '_all',
                render: function (data) {
                    if (data === [] || data === '' || data === {}) {
                        return '&mdash;';
                    }
                    return data;
                }
            },
        ],
        order: [],
        paging: false,
        info: false,
        dom: 't',
        autoWidth: false,
        createdRow: function (row) {
            $(row).addClass('table__row');
        },
        initComplete: function () {
            $('.table__thead > tr').addClass('table__row table__row--header');
            $('th').addClass('table__cell--header');
            $('.table__cell--header.sorting').append('<img class="table__sort-icon" src="img/arrows.svg">');
            $('.table__cell--header:not(:first-child)').addClass('table__cell--header-no-checkbox');
        }
    });

    $(".sheet__search").keyup(function () {
        table.search(this.value).draw();
    });

    $('.sorting.table__cell--header.table__cell--header-no-checkbox').click(function () {
        $('.table__sort-icon-sorted')
            .replaceWith('<img class="table__sort-icon" src="img/arrows.svg">');

        if ($(this).hasClass('sorting_asc')) {
            $(this)
                .children('.table__sort-icon')
                .replaceWith('<img class="table__sort-icon table__sort-icon-sorted" src="img/sort_asc.svg">');
        }

        if ($(this).hasClass('sorting_desc')) {
            $(this)
                .children('.table__sort-icon')
                .replaceWith('<img class="table__sort-icon table__sort-icon-sorted" src="img/sort_desc.svg">');
        }
    });

    $('.table__select--all').click(function () {
        var all_checked = $(this).prop('checked');

        if (all_checked) {
            $('.table__select--one').prop('checked', true);
        } else {
            $('.table__select--one').prop('checked', false);
        }
    });
});