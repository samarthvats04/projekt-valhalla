import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { passkey } = await req.json()
    
    // Get the secret passkey from environment variable
    const CORRECT_PASSKEY = Deno.env.get('SECRET_PASSKEY')
    
    if (!CORRECT_PASSKEY) {
      console.error('SECRET_PASSKEY environment variable not set')
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error' 
        }),
        {
          status: 500,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          },
        },
      )
    }
    
    // Verify the passkey (case-insensitive, trimmed)
    const isValid = passkey?.toUpperCase().trim() === CORRECT_PASSKEY.toUpperCase().trim()
    
    return new Response(
      JSON.stringify({ 
        success: isValid,
        message: isValid ? 'Access granted' : 'Access denied'
      }),
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Invalid request format' 
      }),
      {
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      },
    )
  }
})