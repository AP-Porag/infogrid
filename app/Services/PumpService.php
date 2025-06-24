<?php

namespace App\Services;

use App\Models\Pump;
use App\Services\BaseService;

class PumpService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Pump::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

