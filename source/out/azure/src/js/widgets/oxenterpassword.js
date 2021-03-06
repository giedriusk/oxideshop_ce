/**
 *    This file is part of OXID eShop Community Edition.
 *
 *    OXID eShop Community Edition is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    OXID eShop Community Edition is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with OXID eShop Community Edition.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link      http://www.oxid-esales.com
 * @package   out
 * @copyright (C) OXID eSales AG 2003-2013
 * @version OXID eShop CE
 * @version   SVN: $Id: oxenterpassword.js 35529 2011-05-23 07:31:20Z vilma $
 */
( function( $ ) {
    /**
     * Show password field if email will be changed
     */
    oxEnterPassword = {
        options: {
            metodEnterPasswd      : "oxValidate_enterPass"
        },

        _create: function()
        {
            var self    = this,
            options = self.options,
            el      = self.element;

            el.bind ( "keyup", function() {
                self.showInput( el, el.val() != el.attr( "defaultValue" ), options.metodEnterPasswd );
            });
        },

        /**
         * Shows/hides given element
         */
        showInput: function( oSource, blShow, sClass )
        {
            var oRegexp  = new RegExp( sClass + "Target\\[(.+)\\]", "g" );
            var sClasses = oRegexp.exec( oSource.attr( "class" ) );
            if ( sClasses && sClasses.length ) {
                var aClasses = sClasses[1].split(",");

                for (var i = 0; i < aClasses.length; i++) {
                    if (blShow) {
                        $("." + aClasses[i]).show();
                    }
                    else {
                        $("." + aClasses[i]).hide();
                    }
                }
            }
        }

    }

    $.widget( "ui.oxEnterPassword", oxEnterPassword );

} )( jQuery );