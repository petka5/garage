define([ 'app' ], function(app) {
	return app.directive('myLangMenu', function($translate, $rootScope, tmhDynamicLocale) {
		
		return {
			restrict : 'A',
			replace : true,
			template : '<div class="language-menu" ng-if="visible"><span ng-repeat="locale in localesNames" ng-click="changeLanguage(locale)">{{locale}}</span>',
			controller : function($scope, $http) {
				$http.get('/languages').then(function(response){
										
					var service = function(){
						LOCALES  = {'locales': {}};
						response.data.forEach(function(e){
							LOCALES.locales[e.lang] = e.name;
						});
						
						// PREPARING LOCALES INFO
						var localesObj = LOCALES.locales;

						// locales and locales display names
						var _LOCALES = Object.keys(localesObj);
						if (!_LOCALES || _LOCALES.length === 0) {
							console.error('There are no _LOCALES provided');
						}
						var _LOCALES_DISPLAY_NAMES = [];
						_LOCALES.forEach(function(locale) {
							_LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
						});

						// STORING CURRENT LOCALE
						var currentLocale = $translate.proposedLanguage();// because of async
						// loading

						// METHODS
						var checkLocaleIsValid = function(locale) {
							return _LOCALES.indexOf(locale) !== -1;
						};

						var setLocale = function(locale) {
							if (!checkLocaleIsValid(locale)) {
								console.error('Locale name "' + locale + '" is invalid');
								return;
							}
							currentLocale = locale;// updating current locale

							// asking angular-translate to load and apply proper translations
							$translate.use(locale);
						};

						// EVENTS
						// on successful applying translations by angular-translate
						$rootScope.$on('$translateChangeSuccess', function(event, data) {
							document.documentElement.setAttribute('lang', data.language);// sets
							// "lang"
							// attribute
							// to
							// html

							// asking angular-dynamic-locale to load and apply proper AngularJS
							// $locale setting
							tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
						});

						return {
							getLocaleDisplayName : function() {
								return localesObj[currentLocale];
							},
							setLocaleByDisplayName : function(localeDisplayName) {
								setLocale(_LOCALES[_LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get
								// locale
								// index
								]);
							},
							getLocalesDisplayNames : function() {
								return _LOCALES_DISPLAY_NAMES;
							},
							getLocalesNames : function(){
								return _LOCALES;
							},
							setLocaleByName : function(locale){
								setLocale(_LOCALES[_LOCALES.indexOf(locale)])
							}
						};
						
					}();
					
					$scope.currentLocaleDisplayName = service.getLocaleDisplayName();
					$scope.localesDisplayNames = service.getLocalesDisplayNames();
					$scope.localesNames = service.getLocalesNames();
					$scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
	
					$scope.changeLanguage = function(locale) {
						service.setLocaleByName(locale);
					};
				});
			}
		};
	});
});
