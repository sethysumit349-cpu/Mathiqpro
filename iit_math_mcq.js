(function(global){
  if(global.__MATHIQ_BANKS_PROMISE) return;
  global.__MATHIQ_BANKS_PROMISE = fetch('data/jee-math-questions.sample.json')
    .then(function(res){
      if(!res.ok) throw new Error('Failed to load question bank JSON: '+res.status);
      return res.json();
    })
    .then(function(data){
      global.JEE_MAIN_BANK = Array.isArray(data.jee_main) ? data.jee_main : [];
      global.JEE_ADVANCED_BANK = Array.isArray(data.jee_advanced) ? data.jee_advanced : [];
      global.IIT_MATH_BANK = Array.isArray(data.iit_math) ? data.iit_math : [];
      return data;
    })
    .catch(function(err){
      console.error('[MathIQ] Question bank load failed', err);
      global.JEE_MAIN_BANK = global.JEE_MAIN_BANK || [];
      global.JEE_ADVANCED_BANK = global.JEE_ADVANCED_BANK || [];
      global.IIT_MATH_BANK = global.IIT_MATH_BANK || [];
      throw err;
    });
})(window);
