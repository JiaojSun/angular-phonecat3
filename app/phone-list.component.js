'use strict';

// Register `phoneList` component, along with its associated controller and template
/*angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });*/

/*使用组件的好处：

让index.html更简洁；

更好地分离视图和模型，修改index.html时不会不小心破坏组件；

组件可以单独测试；

组件可以复用

组件使用$ CTRL作为控制器的别名。
控制器+模板-->组件
*/
  angular.
     module('phonecatApp').
     component('phoneList',{
      template:
           '<ul>'+
             '<li ng-repeat="phone in $ctrl.phones">'+
               '<span>{{phone.name}}</span>'+
               '<p>{{phone.snippet}}</p>'+
             '</li>'+
          '</ul>',
      controller:function PhoneListController(){
        this.phones=[
           {
              name: 'Nexus S',
              snippet: 'Fast just got faster with Nexus S.'
            }, {
              name: 'Motorola XOOM™ with Wi-Fi',
              snippet: 'The Next, Next Generation tablet.'
            }, {
              name: 'MOTOROLA XOOM™',
              snippet: 'The Next, Next Generation tablet.'
            }
         ];
      }
     });
