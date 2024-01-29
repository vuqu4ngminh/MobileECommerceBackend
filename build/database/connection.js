"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _supabaseJs = require("@supabase/supabase-js");
require('dotenv').config();
var supabase = (0, _supabaseJs.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
var _default = exports["default"] = supabase;